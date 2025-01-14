type SourceData = {
    title: string;
    year: number;
    author: string;
};

type TargetData = {
    title: string;
    year: number;
    author: string;
    preview: string;
    url: string;
};

const createBook = (data: SourceData): TargetData => {
    return {
        ...data,
        preview: `Название: ${data.title}, Автор: ${data.author}, Год: ${data.year}`,
        url: `www.someurl.com/preview?title=${encodeURIComponent(data.title)}&year=${encodeURIComponent(data.year)}&author=${encodeURIComponent(data.author)}`,
    };
};

const data: SourceData = {
    title: "Harry Potter",
    year: 1997,
    author: "J.K. Rowling",
};

const target: TargetData = createBook(data);
console.log(target);
