import { Header } from "./header"

export default function Layout({ children }) {
    return (
        <>

            <Header title={"ダジャレ替え歌作成機"} />
            <main>{children}</main>



        </>
    )
}