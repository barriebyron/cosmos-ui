import Card from "./Card.vue";
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: "Card",
  component: Card,
  decorators: [withKnobs]
};

export const normal = () => ({
  components: { Card },
  props: {
    overline: {
      default: text("Overline", "Overline")
    },
    title: {
      default: text("Title", "Title")
    },
    size: {
      default: text("Size", "medium")
    }
  },
  template: `
    <div style="display: grid; grid-auto-flow: column; gap: 1rem;">
      <card v-bind="{overline, title, size}">
        <div>There are many variations many variations of passages There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</div>
      </card>
      <card v-bind="{overline, title, size}">
        <div>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</div>
      </card>
    </div>
  `
});
