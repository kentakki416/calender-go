FROM golang:alpine
# アップデートとgitのインストール！！
RUN apk update && apk add git

COPY ./backend /app/go
WORKDIR /app/go
RUN go mod download
RUN go install github.com/cosmtrek/air@v1.29.0

CMD ["air", "-c", ".air.toml"]