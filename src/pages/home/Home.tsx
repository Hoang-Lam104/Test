import { Carousel, Divider, Layout, Typography } from "antd";
import Footer from "common/components/Layout/Footer";
import Header from "common/components/Layout/Header"
import TestimonialsItems from "common/components/Slider/Testimonials";
import { getGalleries } from "common/constants/api/GalleriesApi";
import { IGalleries } from "models/galleries.model";
import { useEffect, useState } from "react";

const { Content } = Layout;
const { Title } = Typography;

const Home: React.FC = () => {
    const [testimonialList, setTestimonialList] = useState<IGalleries[]>([]);

    useEffect(() => {
        getGalleries().then(response => {
            console.log("first", response.data)
            setTestimonialList(response.data)
        })
    }, [])

    return (
        <Layout>
            <Header />
            <Layout>
                <Content id="home-content">
                    <div>Hello, World</div>
                    <div className="testimonial-container">
                        <Title className="title">Testimonials</Title>
                        <Carousel
                            autoplay
                        >
                            {testimonialList.map(item => (
                                <div>
                                    <TestimonialsItems key={item.id} data={item}></TestimonialsItems>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </Content>
            </Layout>
            <Divider />
            <Footer />
        </Layout>
    )
}

export default Home;