
interface Image {
    id: number;
    src: string;
}

const desktopImage: Image[] = [
    {
        id: 1,
        src: "https://wallpapers.com/images/hd/black-and-white-graffiti-by-michael-hills-v4ukubkdzis071fy.jpg",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
]


export const DesignArt = ({type}: {type: "signup" | "signin"}) => {

    const selectedImges = (type === "signin" ? desktopImage[0].src : desktopImage[1].src);
  
    return (
      <div className="bg-red-100 h-screen flex justify-center flex-col">
        <div className="w-full h-full min-h-full">
           <img src={selectedImges} alt="Design" className="w-full h-full object-cover" />
        </div>
      </div>
    );
  };