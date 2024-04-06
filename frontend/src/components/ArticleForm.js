import { useState } from 'react'
import axios from "axios";
const ArticleForm = () => {
    const [articleId, setArticleId] = useState('')
    const [email, setEmail] = useState('')
    const [file, setFile] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        // const article = { articleId, email, file }
        const formData = new FormData();
        formData.append("articleId", articleId)
        formData.append("email", email)
        formData.append("file", file)
        console.log(articleId, email, file)
        const result = await axios.post("http://localhost:5000/api/articles", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log(result)
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New article</h3>

            <label>Article ID:</label>
            <input
                type="text"
                onChange={(e) => setArticleId(e.target.value)}
                placeholder='articleId'
                required
            />

            <label>Email:</label>
            <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}

                required
            />

            <label>Upload pdf file:</label>
            <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                accept='application/pdf'
                required
            />

            <button type='submit'>Add article</button>
        </form>
    )
}

export default ArticleForm