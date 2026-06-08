import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

interface RecommendationPayload {
    customer_unique_id: string;
    product_id?: string | null;
}

interface PythonApiResponse {
    products: string[];
}

interface PythonProductDetail {
    product_id: string;
    product_category_name_english?: string;
    product_category_name?: string;
    avg_price?: number;
}

@Injectable()
export class RecommendationService {
    private readonly pythonBaseUrl = 'http://127.0.0.1:8000';

    constructor(private readonly httpService: HttpService) { }

    async buscarRecomendacoes(customerId: string, productId?: string): Promise<any[]> {
        try {
            const payload = {
                customer_unique_id: customerId,
                product_id: productId || null,
            };

            const aiResponse = await firstValueFrom(
                this.httpService.post<PythonApiResponse>(`${this.pythonBaseUrl}/recomendar`, payload)
            );

            const listaDeIds = aiResponse.data.products || [];

            const promessasDeDetalhes = listaDeIds.map(async (id) => {
                try {
                    const prodRes = await firstValueFrom(
                        this.httpService.get<PythonProductDetail>(`${this.pythonBaseUrl}/produto/${id}`)
                    );

                    const nomeAmigavel = prodRes.data.product_category_name_english ||
                        prodRes.data.product_category_name ||
                        'Produto Especial';

                    return {
                        id: id,
                        name: this.formatarNome(nomeAmigavel),
                        price: prodRes.data.avg_price || 0
                    };
                } catch (err) {
                    return { id: id, name: 'Produto Recomendado', price: 0 };
                }
            });

            return await Promise.all(promessasDeDetalhes);

        } catch (error) {
            console.error("Erro no motor de recomendações:", error.message);
            throw new HttpException(
                'O motor de recomendação está indisponível no momento.',
                HttpStatus.SERVICE_UNAVAILABLE,
            );
        }
    }

    private formatarNome(texto: string): string {
        return texto
            .replace(/_/g, ' ')
            .replace(/\b\w/g, (l) => l.toUpperCase());
    }
}