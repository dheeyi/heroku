const next = require('next')
const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = app.getRequestHandler()

const { builder } = require('./schema/builder/devMode');

Promise.all([builder(dev), app.prepare()])
    .then(() => {

    const server = express({
        strict: true
    });

    server.use(
        helmet.contentSecurityPolicy({
            directives: {
                defaultSrc: ['\'self\''],
                baseUri: ['\'self\''],
                fontSrc: [
                    'https://fonts.gstatic.com'
                ],
                imgSrc: [
                    '\'self\'',
                    'data:'
                ],
                scriptSrc: [
                    '\'self\''
                ],
                connectSrc: ['\'self\''],
                styleSrc: [
                    '\'unsafe-inline\''
                ],
                objectSrc: ['\'none\''],
                scriptSrcAttr: ['\'none\''],
                blockAllMixedContent: [],
                upgradeInsecureRequests: []
            },
            reportOnly: false
        })
    );

    server.all(
        '*',
        cors({
            origin: "*"
        })
    );

    server.use(
        compression({
            level: 9,
            memLevel: 9
        })
    );

    server.use(morgan('dev'));

    server.use(express.urlencoded({ extended: false }));

    server.use(cookieParser());

        server.get(
            '*',
            (req, res) => handler(
                req,
                res
            )
        );

    server.use(handler);

    server.listen(
        '3030',
        (errors) => {

            console.info('running on http://localhost:3030');

        }
    );
})
    .catch((applicationException) => {

        console.error(applicationException);
        process.exit(1);

    });
