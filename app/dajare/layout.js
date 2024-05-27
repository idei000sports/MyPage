import { Header } from "./header"

export default function Layout({ children }) {
    return (
        <>

            <main>
            <Header title={"ダジャレ替え歌作成機"} />
                {children}
                
            </main>



        </>
    )
}