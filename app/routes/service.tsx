export default function Service(){
    return (
        <div className="bg-white flex flex-col items-center justify-center min-h-screen">
            <div className="text-center mb-10">
                <h2 className="text-2xl font-semibold text-gray-800">Karya Koleksi</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl px-4">
                <div className="overflow-hidden rounded-md shadow-sm hover:shadow-md transition">
                    <img
                        src="https://serupa.id/wp-content/uploads/2018/09/autumn-landscape-with-four-trees-vincent-van-gogh-realisme-serupa.id_.jpg"
                        alt="Karya 1"
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="overflow-hidden shadow-sm hover:shadow-md transition">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/960px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
                        alt="Karya 2"
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="overflow-hidden rounded-md shadow-sm hover:shadow-md transition">
                    <img
                        src="https://img-highend.okezone.com/okz/900/pictureArticle/images_PN78zd18_15PD4t.jpg"
                        alt="Karya 3"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </div>
    );
}