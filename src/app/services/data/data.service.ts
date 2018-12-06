import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  getPortfolios() {
    return [
      {
        id: 1,
        title: 'Water safety charity',
        subtitle: 'UI design. Motion design. Graphic design.',
        description: 'While working at the Royal National Lifeboat Institution (RNLI) I  collaborated with various teams like the creative team, digital team, copyrighters, marketing, etc to ensure the correct message was portrayed digitally. Taking direction from my creative brand manager, I worked on exciting new projects like launching their new shop online with Shopify, update different components on the website to ensure the best user journey and turn print into digital for their marketing campaigns.',
        thumbnail: '../../../assets/HomepageWaterSafety.jpg',
        images: [22, 23, 24, 25, 26, 27]
      },
      {
        id: 2,
        title: 'Event software',
        subtitle: 'UI / UX design.',
        description: 'Here are a few samples of my work where I designed 2 products. One focusing on conference type events and the other catering to charity gala events. I created wireframes and high fidelity prototypes ready for development for for both CMS and user frontend on both products.',
        thumbnail: '../../../assets/HomepageEventApp.jpg',
        images: [1, 2, 3, 4, 28, 29, 30, 31]
      },
      {
        id: 3,
        title: 'Motion design',
        subtitle: 'FMCG adverts. Customer service training. Kids TV animation',
        description: 'This is a collection of motion design that I have produced so far through my career. I love motion design so will grab the opportunity to work with aftereffects when I can.',
        thumbnail: '../../../assets/HomepageMotion.gif',
        images: [5, 6, 7, 8, 9]
      },
      {
        id: 4,
        title: 'Event technology',
        subtitle: 'Graphic design. UI design.',
        description: 'While working with a fast growing event company I helped them re-brand 2 products, both online and print materials.',
        thumbnail: '../../../assets/HomepageEventTechnology.jpg',
        images: [14, 17, 15, 16, 19, 21, 20, 18]
      }
    ];
  };

  getPortfolio(id) {
    return filter(this.getPortfolios(), (port) => port.id === parseInt(id))[0];
  };

  getAssets() {
    return [
      {
        id: 1,
        link: null,
        icon: '',
        url: '../../../assets/eventapp1.jpg'
      },
      {
        id: 2,
        link: null,
        icon: '',
        url: '../../../assets/eventapp2.jpg'
      },
      {
        id: 3,
        link: null,
        icon: '',
        url: '../../../assets/eventapp3.gif'
      },
      {
        id: 4,
        link: null,
        icon: '',
        url: '../../../assets/eventapp4.jpg'
      },
      {
        id: 5,
        link: 'https://www.youtube.com/watch?v=DY_Y5Em6V1Y&feature=youtu.be',
        icon: 'play_arrow',
        url: '../../../assets/Motion1.jpg'
      },
      {
        id: 6,
        link: null,
        icon: '',
        url: '../../../assets/Motion2.jpg'
      },
      {
        id: 7,
        link: 'https://vimeo.com/116851988',
        icon: 'play_arrow',
        url: '../../../assets/Motion3.jpg'
      },
      {
        id: 8,
        link: 'https://vimeo.com/124189907',
        icon: 'play_arrow',
        url: '../../../assets/Motion4.jpg'
      },
      {
        id: 9,
        link: 'https://vimeo.com/115574614',
        icon: 'play_arrow',
        url: '../../../assets/Motion5.jpg'
      },
      {
        id: 10,
        link: null,
        icon: '',
        url: '../../../assets/Mixed1.jpg'
      },
      {
        id: 11,
        link: null,
        icon: '',
        url: '../../../assets/Mixed2.jpg'
      },
      {
        id: 12,
        link: null,
        icon: '',
        url: '../../../assets/Mixed3.jpg'
      },
      {
        id: 13,
        link: null,
        icon: '',
        url: '../../../assets/Mixed4.jpg'
      },
      {
        id: 14,
        link: null,
        icon: '',
        url: '../../../assets/ReBranding1.jpg'
      },
      {
        id: 15,
        link: null,
        icon: '',
        url: '../../../assets/ReBranding2.jpg'
      },
      {
        id: 16,
        link: null,
        icon: '',
        url: '../../../assets/ReBranding3.jpg'
      },
      {
        id: 17,
        link: null,
        icon: '',
        url: '../../../assets/ReBranding4.jpg'
      },
      {
        id: 18,
        link: null,
        icon: '',
        url: '../../../assets/ReBranding5.jpg'
      },
      {
        id: 19,
        link: null,
        icon: '',
        url: '../../../assets/ReBranding6.jpg'
      },
      {
        id: 20,
        link: null,
        icon: '',
        url: '../../../assets/ReBranding7.jpg'
      },
      {
        id: 21,
        link: null,
        icon: '',
        url: '../../../assets/ReBranding8.jpg'
      },
      {
        id: 22,
        link: null,
        icon: '',
        url: '../../../assets/WaterSafety1.jpg'
      },
      {
        id: 23,
        link: 'https://shop.rnli.org/',
        icon: 'exit_to_app',
        url: '../../../assets/WaterSafety2.jpg'
      },
      {
        id: 24,
        link: null,
        icon: '',
        url: '../../../assets/WaterSafety3.jpg'
      },
      {
        id: 25,
        link: 'https://www.youtube.com/watch?v=mY7IBaRNJ90&index=2&list=PLrYLpy0TFz06lXMSWE1Z3P8b3JAk1FglP',
        icon: 'play_arrow',
        url: '../../../assets/WaterSafety4.jpg'
      },
      {
        id: 26,
        link: null,
        icon: '',
        url: '../../../assets/WaterSafety5.jpg'
      },
      {
        id: 27,
        link: null,
        icon: '',
        url: '../../../assets/WaterSafety6.jpg'
      },
      {
        id: 28,
        link: null,
        icon: '',
        url: '../../../assets/EventSoftware.jpg'
      },
      {
        id: 29,
        link: null,
        icon: '',
        url: '../../../assets/EventSoftware2.jpg'
      },
      {
        id: 30,
        link: null,
        icon: '',
        url: '../../../assets/EventSoftware3.jpg'
      },
      {
        id: 31,
        link: null,
        icon: '',
        url: '../../../assets/EventSoftware4.jpg'
      }
    ]
  };

  getAssetById(id) {
    return filter(this.getAssets(), (image) => image.id === id)[0]
  };

  getAssetSet(ids) {

    if (!ids) {
      return [];
    };

    return filter(this.getAssets(), (image) => ids.indexOf(image.id) !== -1);
  };

  getTestimonials() {
    return [
      {
        description: '"Roxanne\'s attitude and work output over the last month has been outstanding. She has tremendously improved our relationship with the digital team by initiating meetings and conversations, finding out how things really work so we have been able to provide designs for the Spring Appeal that work for us creatively and within the boundaries of .org and their processes. A big part of the success of the Spring Appeal so far is down to her work. Design-wise she always goes that extra mile to improve and tweak, achieving pixel perfection and designs that stand up to rigorous scrutiny from all sides - no mean feat! Really fantastic work! Thanks!"',
        author: 'Jimmy Young, Creative brand manager, RNLI, 2018"'
      },
      {
        description: '"Thank you so much for your time and energy spent on Spring Appeal. With a series of firsts there was a huge amount of training involved and testing to be done. You remained positive throughout and came at each challenge with well thought out, effective solutions. We couldn\'t have done it without you!"',
        author: 'Emma Barker, Creative services account manager, RNLI, 2018'
      },
      {
        description: '"Roxanne is a dream colleague. From the start of Rox\'s employment at CrowdComms she had injected flare and passion no matter what the demands of the project. She has produced high-end class professional print and digital work for both the Australian and European offices. A great asset to Rox is her flexibility to work across modern design disciplines; layout, drawing & sketching, video editing, animation, UI & UX to name a few. Rox also is an excellent team player and joy to have in the office."',
        author: 'Andy Bashford, Head of Design & Development at CrowdComms 2017'
      },
      {
        description: '"Working with Roxanne has been a real pleasure. Her can-do attitude and positive approach to work was clear to see across major branding and website projects - a real team player"',
        author: 'Alex Beeston, Marketing Manager at Mary Gober International 2014'
      }
    ];
  };
}