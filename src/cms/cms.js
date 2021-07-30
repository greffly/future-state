import CMS from 'netlify-cms-app';
import '../assets/sass/styles.sass';
import HomePagePreview from './preview-templates/HomePagePreview';
import AboutPagePreview from './preview-templates/AboutPagePreview';
import ArticlePreview from './preview-templates/ArticlePreview';
import PricingPagePreview from './preview-templates/PricingPagePreview';
import ContactPagePreview from './preview-templates/ContactPagePreview';
import TalentPagePreview from './preview-templates/TalentPagePreview';
import CompanyPagePreview from './preview-templates/CompanyPagePreview';
import WorkPagePreview from './preview-templates/WorkPagePreview';

CMS.init({
  config: {
    backend: {
      name: 'git-gateway',
    },
  },
});
CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('home', HomePagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('pricing', PricingPagePreview);
CMS.registerPreviewTemplate('talent', TalentPagePreview);
CMS.registerPreviewTemplate('contact', ContactPagePreview);
CMS.registerPreviewTemplate('blog', ArticlePreview);
CMS.registerPreviewTemplate('companies', CompanyPagePreview);
CMS.registerPreviewTemplate('work', WorkPagePreview);
