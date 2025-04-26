import { brandsList } from "../constant"


const BrandLogo = ({ brand }) => {
    return (
        <div className="flex-none flex-center marquee-item">
            <img
                src={brand.imgPath}
                alt={brand.alt}
            />

        </div>
    );
}
const Brands = () => {
    return (
        <div className="md:my-20 my-10 relative">
            < div className="gradient-edge" />
            < div className="gradient-edge" />

            <div className="marquee h-52">
                <div className="marquee-box md:gap-12 gap-5">
                    {brandsList.map((brand, index) => (
                        <BrandLogo
                            key={index}
                            brand={brand}
                        />
                    ))}
                    {brandsList.map((brand, index) => (
                        <BrandLogo
                            key={index}
                            brand={brand}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Brands