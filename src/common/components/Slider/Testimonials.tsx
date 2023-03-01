import { Typography } from "antd";
import { IGalleries } from "models/galleries.model";

type TestimonialsProp= {
    data: IGalleries;
}

const TestimonialsItems =({data}: TestimonialsProp)=> {
    const {id, description, imageUrl} = data;
    return(
        <div className="testimonial-content">
            <img src={imageUrl} alt=''></img>
            <p>{description}</p>
        </div>
    );
}

export default TestimonialsItems;