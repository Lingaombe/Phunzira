const ilovepdf = new ILovePDFApi('project_public_410f4438c7b6689cdb9f289cfb982632_gTTNYaeaf8a12dcdb6a4d386af98f2e93c6ce');
const ILovePDFApi = require('@ilovepdf/ilovepdf-nodejs');
const ILovePDFFile = require('@ilovepdf/ilovepdf-nodejs/ILovePDFFile');

try {
    ilovepdf = new Ilovepdf("project_public_410f4438c7b6689cdb9f289cfb982632_gTTNYaeaf8a12dcdb6a4d386af98f2e93c6ce", "secret_key_874b2f187f5fed509626e27fc6303aca_Ehdc614b4ad70d48a445eef30eede35b5a90f");

    const task = ilovepdf.newTask('imagepdf') /* as ImagePdfTask */;

    task.start()
    .then(() => {
        return task.addFile('path/to/file1_name.jpg');
    })
    .then(() => {
        return task.process({ merge_after: true });
    })
    .then(() => {
        return task.download();
    })
    .then((data) => {
        const data = newTask.download('path/to/download');
        fs.writeFileSync('foldername/folder1/', data);
    });
} catch (error) {
    console.error('Error: ', error.message);
}