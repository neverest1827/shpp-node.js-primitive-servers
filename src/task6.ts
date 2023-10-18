// 6.

// you don't know Promises and async/await yet. Or do you? 
// ....can be hard, don't worry and SKIP if you do not know how to do it

async function world(a: number): Promise<string> {
    return "*".repeat(a)
}

const hello = async (): Promise<string> => {
   return await world(10)
}
hello()
    .then((r: string) => console.log(r))
    .catch((e: Error) => console.log("fail"))
