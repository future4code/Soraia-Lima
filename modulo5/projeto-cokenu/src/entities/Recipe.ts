export class Recipe {
    constructor(
        private id: string,
        private user_id: string,
        private title: string,
        private description: string,
        private creation_date: string
    ) { }

    public getId(): string {
        return this.id
    }
    public getUserId(): string {
        return this.user_id
    }
    public getTitle(): string {
        return this.title
    }
    public getDescription(): string {
        return this.description
    }
    public getDate(): string {
        return this.creation_date
    }

    static toRecipeModel(data: Recipe) {
        return new Recipe(data.id, data.user_id, data.title, data.description, data.creation_date)
    }

}