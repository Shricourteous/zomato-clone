FROM node:alpine

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . ./

ENV MONGO_URL=mongodb+srv://devtown:devtown10567@cluster0.gg0gdie.mongodb.net/?retryWrites=true&w=majority
ENV JWT_SECRET=ZomatoApp
ENV AWS_S3_ACCESS_KEY=AKIATYPTSLKVHGDY4EXO
ENV AWS_S3_SECRET_KEY=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
ENV GOOGLE_CLIENT_ID=755593293106-gqljs05f9lk28bdag4umk2sjd6did0fl.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=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

RUN npm run build

CMD [ "npm", "run", "start" ]