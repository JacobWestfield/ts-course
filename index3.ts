interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const COMMENTS_URL: string = "https://jsonplaceholder.typicode.com/comments";

const getData = async (url: string) => {
  try {
    const fetchedData: Response = await fetch(url);
    return fetchedData;
  } catch (error) {
    throw new Error("Request failure");
  }
};

getData(COMMENTS_URL)
  .then(async (data: Response) => {
    const jsonData: Array<IComment> = await data.json();
    jsonData.forEach((el: IComment) => {
      console.log(`ID: ${el.id}, Email: ${el.email}`);
    });
  })
  .catch((error: Error) => {
    console.log(error.message);
  });
