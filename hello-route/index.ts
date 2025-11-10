import i18nConfig from './i18n';
import Component from './Component';
import info from './info.yaml';

export default {
    info: {
        slug_name: info.slug_name,
        type: info.type,
        route: info.route,
    },
    i18nConfig,
    component: Component,
};
