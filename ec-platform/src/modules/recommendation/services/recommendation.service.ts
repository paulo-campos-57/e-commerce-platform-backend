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

@Injectable()
export class RecommendationService {
    private readonly pythonApiUrl = 'http://127.0.0.1:8000/recomendar';

    constructor(private readonly httpService: HttpService) { }

    async buscarRecomendacoes(customerId: string, productId?: string): Promise<string[]> {
        try {
            const payload = {
                customer_unique_id: customerId,
                product_id: productId || null,
            };

            const response = await firstValueFrom(
                this.httpService.post<PythonApiResponse>(this.pythonApiUrl, payload)
            );

            return response.data.products;
        } catch (error) {
            console.error("Erro detalhado do Axios:", error.message);
            throw new HttpException(
                'O motor de recomendação está indisponível no momento.',
                HttpStatus.SERVICE_UNAVAILABLE,
            );
        }
    }
}