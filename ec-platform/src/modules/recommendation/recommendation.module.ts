import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { RecommendationController } from './controllers/recommendation.controller';
import { RecommendationService } from './services/recommendation.service';

@Module({
    imports: [HttpModule],
    controllers: [RecommendationController],
    providers: [RecommendationService],
})
export class RecommendationModule { }