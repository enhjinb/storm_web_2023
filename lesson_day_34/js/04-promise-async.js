let myPromise = new Promise ((resolve, reject) => {
    const condition = true;
    if (condition) {
        resolve('Promise is resolved successfully.');
    }else {
        reject('Promise is rejected.');
    }
});




async function callMyPromise() {
    try {
        const res = await myPromise;

        console.log(res);
    } catch (err) {
        console.error(err);
    }
}
callMyPromise();