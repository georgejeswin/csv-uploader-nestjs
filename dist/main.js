"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const express_1 = require("express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.use((0, express_1.json)({ limit: '50mb' }));
    app.use((0, express_1.urlencoded)({ extended: true, limit: '50mb' }));
    const config = app.get(config_1.ConfigService);
    app.setGlobalPrefix('/api');
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('CSV uploader')
        .setDescription('Dev Book API description')
        .setVersion('1.0')
        .addTag('devbook')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('api/swagger', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    await app.listen(process.env.PORT, () => {
        console.log('[WEB]', config.get('BASE_URL'));
    });
}
bootstrap();
//# sourceMappingURL=main.js.map