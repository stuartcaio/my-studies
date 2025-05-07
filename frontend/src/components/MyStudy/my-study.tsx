import { useState } from "react";
import "./my-study.css"

export default function MyStudy() {
    const [contents, setContents] = useState([]);

    return (
        <div className="my-study">
            <header className="my-study__header">
                <h1>My Study</h1>
                <button>Edit</button>
            </header>
            <main className="my-study__contents">
                <section className="my-study__contents-header">
                    <h2>Contents</h2>
                    <button>Add new</button>
                </section>
                <ul>
                    <li>
                        <button><img src="" /></button>
                    </li>
                </ul>
            </main>
        </div>
    )
}