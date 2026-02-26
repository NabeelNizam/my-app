import { useRouter } from "next/router";

const kategori = () => {
    const router = useRouter();
    // console.log(router);
    const { query } = router;
    return (
    <div>
            <h1>Halaman Kategori</h1>
            {Array.isArray(query.slug) ? (
                <ul>
                    {query.slug.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
                ) : (
                <p>{query.slug}</p>
                )}
    </div>
    );
}

export default kategori;                                                                 