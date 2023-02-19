import Image from 'next/image';

// export const revalidate = 12;

// generateStaticParams

const MovieDetail = async ({ params }) => {
  // console.log('MovieDetail', params);

  const { movieId } = params;

  const imagePath = 'https://image.tmdb.org/t/p/original';

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );

  const data = await res.json();

  // console.log('MovieDetail', data);

  return (
    <div>
      <h1 className=" text-2xl">{data.title}</h1>
      <h2 className="text-lg">{data.release_date}</h2>
      <h2 className="text-lg">Runtime: {data.runtime}</h2>
      <h2 className=" text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md">
        {data.status}
      </h2>
      <Image
        className="my-12 w-full"
        src={imagePath + data.backdrop_path}
        width={1000}
        height={1000}
        priority
      />
      <p>{data.overview}</p>
    </div>
  );
};

export default MovieDetail;
