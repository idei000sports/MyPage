

export function zengo(line) {
    let 一文 = {
        mae: "",
        mannaka: "",
        ato: "",
    }


    let 正規表現 = new RegExp(/「.+?」/);
    if (正規表現.exec(line) != null) {

        //正規表現で周りを削除
        一文.mannaka = 正規表現.exec(line)[0]
        //「」を外す
        一文.mannaka = 一文.mannaka.slice(1);
        一文.mannaka = 一文.mannaka.slice(0, -1);

        let 前取得正規表現 = new RegExp(/(.*)(?=「)/);
        一文.mae = 前取得正規表現.exec(line)[0];

        let 後取得正規表現 = new RegExp(/(?<=」)(.*)/);
        一文.ato = 後取得正規表現.exec(line)[0];
    }

    return 一文;
}