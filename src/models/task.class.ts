export class Task {
    title: string;
    description: string;
    category: string;


    constructor(obj?: any) {
        this.title = obj ? obj.title : '';
        this.description = obj ? obj.description : '';
        this.category = obj ? obj.category : '';

    }

    public toJSON() {
        return {
            title: this.title,
            description: this.description,
            category: this.category,
        }
    }
}