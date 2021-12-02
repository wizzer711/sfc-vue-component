import { Vue } from "vue-property-decorator";
import { Feature } from "./typings";
import "./assets/tailwind.css";
export default class FeaturesCentered2x2Grid extends Vue {
    preHeading: string;
    heading: string;
    description: string;
    features: Array<Feature>;
}
