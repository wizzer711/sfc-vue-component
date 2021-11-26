import { Vue } from "vue-property-decorator";
export default class FeaturesCentered2x2Grid extends Vue {
    preHeading: string;
    heading: string;
    description: string;
    features: Array<{
        heading: string;
        description: string;
        icon: string;
    }>;
}
