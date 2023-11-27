


const BlogsList = ({ blogs, title
    // ,handleDelete 
}) => {


    return (
        <div className="blogs-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blogs-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    {/* <button onClick={() => handleDelete(blog.id)} >Delete</button> */}
                </div>
            ))}
        </div>
    );
}

export default BlogsList;