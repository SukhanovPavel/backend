// import * as process from "process";
import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";


async function start() {
    const PORT = process.env.PORT || 5001;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('База данных + backend')
        .setDescription('documentation REST API')
        .setVersion('1.0.0')
        .addTag('my first backend')
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document)

    await app.listen(PORT, () => console.log(`server is starting on port: ${PORT}`))
}

start();