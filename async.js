function getUsersData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ rollNo: "123" });
        }, 2000);
    });
}

const myFun = async () => {
    console.log("345");

    const result = await getUsersData("123");

    console.log(result);
    console.log("678");
};

myFun();
