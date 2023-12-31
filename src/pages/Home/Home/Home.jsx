import Banner from "../Banner/Banner";
import ToyGallery from "../Gallery/ToyGallery";
import RemoteControlToy from "../RemoteControlToy/RemoteControlToy";
import TabToy from "../ToyTab/TabToy";
import SeaAnimalsTube from "../sea-amimails-tube/SeaAnimalsTube";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ToyGallery></ToyGallery>
      <TabToy />
      <RemoteControlToy></RemoteControlToy>
      <SeaAnimalsTube></SeaAnimalsTube>
    </div>
  );
};

export default Home;
