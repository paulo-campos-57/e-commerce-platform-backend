import { Controller, Get, Query } from '@nestjs/common';
import { RecommendationService } from '../services/recommendation.service';

@Controller('v1/recomendacoes')
export class RecommendationController {
    constructor(private readonly recommendationService: RecommendationService) { }

    @Get()
    async obterRecomendacoes(
        @Query('customerId') customerId: string,
        @Query('productId') productId?: string,
    ) {
        const produtosDetalhados = await this.recommendationService.buscarRecomendacoes(customerId, productId);

        return {
            success: true,
            data: produtosDetalhados,
        };
    }
}