export class Article {

    id         : number;
    title      : string;
    description: string;
    image      : string;

    constructor(
        _id?          : number,
        _title?      : string,
        _description?: string,
        _image?      : string
    )

    constructor(
        _id         : number,
        _title      : string,
        _description: string,
        _image      : string
    ){
        this.id          = _id;
        this.title       = _title;
        this.description = _description;
        this.image       = _image;
    }

    asJson() : any {
        return {
            title : this.title,
            description : this.description,
            image : this.image
        }
    }

    static asArticle(json : any) : Article {
        const id : number          = json['_id']
        const title : string       = json['title']
        const description : string = json['description']
        const image : string       = json['image']

        return new Article(
            id,
            title,
            description,
            image
        )
    }

    static asArticles(jsons : Array<any>) : Array<Article> {
        return jsons.map((json) => this.asArticle(json));
    }
}
