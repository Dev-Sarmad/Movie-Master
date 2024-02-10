import {
  MdFamilyRestroom,
  MdOutlineAnimation,
  MdOutlineScience,
  MdOutlineTheaterComedy,
} from "react-icons/md";
import { Genres } from "../hooks/useGenres";
import { GiCrimeSceneTape, GiRoyalLove } from "react-icons/gi";
import {
  FaFantasyFlightGames,
  FaFilm,
  FaFireAlt,
  FaRegClock,
} from "react-icons/fa";
import { CiMusicNote1, CiWarning } from "react-icons/ci";
import { PiDetective } from "react-icons/pi";
import { TbPumpkinScary } from "react-icons/tb";
import { GrActions } from "react-icons/gr";

interface Props {
  GenIcons: Genres;
}
function GenresIcons({ GenIcons }: Props) {
  const IconMap: { [key: string]: JSX.Element } = {
    Comedy: <MdOutlineTheaterComedy size={30} />,
    Animation: <MdOutlineAnimation size={30} />,
    Crime: <GiCrimeSceneTape size={30} />,
    Documentary: <FaFilm size={30} />,
    Family: <MdFamilyRestroom size={30} />,
    Fantasy: <FaFantasyFlightGames size={30} />,
    Horror: <TbPumpkinScary size={30} />,
    Romance: <GiRoyalLove size={30} />,
    History: <FaRegClock size={30} />,
    Mystery: <PiDetective size={30} />,
    War: <CiWarning size={30} />,
    Music: <CiMusicNote1 size={30} />,
    ScienceFiction: <MdOutlineScience size={30} />,
    Thriller: <FaFireAlt size={30} />,
    Action: <GrActions size={30} />,
  };
  return <>{IconMap[GenIcons.name]}</>;
}

export default GenresIcons;
