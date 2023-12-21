import React, { Component } from "react";
// import { TikTokEmbed } from 'react-social-media-embed';
import { InstagramEmbed } from 'react-social-media-embed';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Direction } from "tabler-icons-react";

// const InstagramLoop = () => {
//     return (
//         <Carousel autoPlay={true} infiniteLoop={true} transitionTime={30} centerMode={true} dynamicHeight={true}>
//             <div style={{ display: 'flex', flexDirection: 'row', marginRight: '35px' }}>
//                 <InstagramEmbed url="https://www.instagram.com/p/C0perG5riUj/" width='30vw' />
//             </div>
//             <div style={{ display: 'flex', flexDirection: 'row', marginRight: '35px' }}>
//                 <InstagramEmbed url="https://www.instagram.com/p/C0krh5cLc4N/?img_index=1" width='30vw' />
//             </div>
//         </Carousel>
//     )
// }

class InstagramLoop extends Component {
    componentDidMount() {
        (function (d, s, id) {
            var js;
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://embedsocial.com/cdn/ht.js";
            d.getElementsByTagName("head")[0].appendChild(js);
        }
            (document, "script", "EmbedSocialHashtagScript")
        );
    }
    render() {
        return (
            <div
                className="embedsocial-hashtag"
                data-ref="0ff3ea6c4712d371684c56ee0291a8823d888239">
            </div>
        )
    }
}

export default InstagramLoop;