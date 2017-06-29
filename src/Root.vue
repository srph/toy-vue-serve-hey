<template>
  <div>
    <div class="main-canopy">
      <div class="back">
        <button type="button" class="plain-button">
          <icon name="arrow-left"></icon>
          <span class="text">Go Back</span>
        </button>
      </div>

      <div class="title">
        <heading-input v-model="title" placeholder="Enter survey name..." class="heading-input"></heading-input>
      </div>

      <div class="actions">
        <ui-button type="button" title="Publish survey" alternate>
          Cancel
        </ui-button>

        <ui-button @click.native="publish" type="button" title="Publish survey" class="hint--left" :aria-label="!title ? 'Publishing will become available after you start filling out content.' : ''">
          Publish
        </ui-button>
      </div>  
    </div>

    <div class="main-box">
      <question-item
        v-for="(question, index) in questions"
        :key="index"
        :questions="questions"
        :question="question"
        :index="index"
        @move="move"
        @update="update"
        @remove="remove"
        @new-choice="choice"
        @update-choice="upchoice"
        @remove-choice="rmchoice">
      </question-item>

      <div class="action-central">
        <ui-select value="-1" @change="add">
          <option value="-1">Add a new question</option>
          <option v-for="(value, index) in types" v-bind:value="index">{{ value.name }}</option>
        </ui-select>
      </div>
    </div>

    <toast ref="toast"></toast>
  </div>
</template>

<script>
import Button from './components/Button';
import Input from './components/Input';
import Select from './components/Select';
import QuestionItem from './components/QuestionItem';
import HeadingInput from './components/HeadingInput';
import Toast from './components/Toast';

export default {
  name: 'root',
  data () {
    return {
      title: '',
      questions: [],
      types: [{ 
        type: 'rate',
        name: 'Rating',
        title: '',
      }, {
        type: 'yes_no',
        name: 'Yes / No',
        title: '',
      }, {
        type: 'multiple_choice',
        name: 'Choice',
        title: '',
        choices: []
      }, {
        type: 'multiple_answer',
        name: 'Multiple Answer',
        title: '',
        choices: []
      }]
    }
  },
  methods: {
    add (type) {
      this.questions.push({ ...this.types[type] });
    },

    update(index, value) {
      this.questions[index].title = value;
    },
    
    remove(index) {
      this.questions.splice(index, 1);
    },

    move(index, dir) {
      const next = dir === 'up'
        ? Math.max(0, index - 1)
        : Math.min(this.questions.length - 1, index + 1);

      this.questions.splice(next, 0, this.questions.splice(index, 1)[0]);
    },

    choice(index) {
      this.questions[index].choices.push({ title: '' });
    },

    upchoice(qindex, cindex, value) {
      this.questions[qindex].choices[cindex].title = value;
    },

    rmchoice(index, cindex) {
      this.questions[index].choices.splice(cindex, 1);
    },

    publish() {
      this.$refs.toast.notify(`Grats! This doesn't actually do anything.`);
    }
  },
  components: {
    'ui-button': Button,
    'ui-input': Input,
    'ui-select': Select,
    QuestionItem,
    HeadingInput,
    Toast
  }
}
</script>

<style scoped>
.main-box {
  width: 640px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 24px;
  padding-bottom: 24px;
}

.main-canopy {
  display: flex;
  align-items: center;
  padding: 24px;
  background: var(--color-white);
}

.main-canopy > .back {
  width: 25%; 
}

.main-canopy > .title {
  width: 50%;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
}

.main-canopy > .title > input {
  text-align: center;
}

.main-canopy > .actions {
  width: 25%;
  margin-left: auto;
  text-align: right;
}

.action-central {
  padding-bottom: 320px;
  width: 240px;
  margin: 0 auto;
}

.plain-button {
  display: flex;
  align-items: center;
  padding: 0;
  height: 48px;
  width: 96px;
  background: transparent;
  border: transparent;
  cursor: pointer;
  font-family: var(--font-family);
  outline: 0;
}

.plain-button > svg {
  margin-right: 8px;
}

.plain-button > .text {
  opacity: 0;
  transition: 200ms all ease;
}

.plain-button:hover > .text {
  opacity: 1;
}
</style>