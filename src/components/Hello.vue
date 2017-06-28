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
        <input type="text" placeholder="Enter survey name..." class="heading-input"></input>
      </div>

      <div class="actions">
        <ui-button type="button" title="Publish survey" alternate>
          Cancel
        </ui-button>

        <ui-button type="button" title="Publish survey">
          Publish
        </ui-button>
      </div>  
    </div>

    <div class="main-box">
      <div class="question-item" v-for="(question, index) in questions">
        <div class="heading">
          <div class="count">{{ index + 1 }}</div>

          <div class="action -remove">
            <ui-button type="button" @click.native="remove(index)" title="Remove question" size="small">
              ×
            </ui-button>
          </div>

          <div class="title">
            <textarea v-model="question.title" placeholder="Enter question title (e.g., what did you like about brand X)..." class="heading-input" v-autosize></textarea>
          </div>

          <span class="typetitle">Question Type:</span>
          <span class="typeinfo">{{ question.name }}</span>

          <div class="action -dir">
            <ui-button type="button" @click.native="move('up', index)" size="small" v-if="index > 0" title="Move question up">
              <icon name="angle-up"></icon>
            </ui-button>

            <ui-button type="button" @click.native="move('down', index)" size="small" v-if="index < questions.length - 1" title="Move question down">
              <icon name="angle-down"></icon>
            </ui-button>
          </div>
        </div>

        <div class="body" v-if="question.choices">
          <h5 class="heading">Answers</h5>
          <div v-for="(choice, cindex) in question.choices" class="choice-item">
            <ui-input v-model="choice.title" placeholder="Enter choice (e.g., Ariel)"></ui-input>
            <ui-button type="button" @click.native="rmchoice(index, cindex)" title="Remove answer" size="small">
              ×
            </ui-button>
          </div>
          
          <button type="button" @click="choice(index)" class="choice-placeholder" v-if="question.choices.length < 6">
            Add a new answer
          </button>
        </div>
      </div>

      <div class="action-central">
        <ui-select value="-1" @change="add">
          <option value="-1">Add a new question</option>
          <option v-for="(value, index) in types" v-bind:value="index">{{ value.name }}</option>
        </ui-select>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button';
import Input from './Input';
import Select from './Select';

export default {
  name: 'hello',
  data () {
    return {
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
    
    remove(index) {
      this.questions.splice(index, 1);
    },

    move(dir, index) {
      const next = dir === 'up'
        ? Math.max(0, index - 1)
        : Math.min(this.questions.length - 1, index + 1);

      this.questions.splice(next, 0, this.questions.splice(index, 1)[0]);
    },

    choice(index) {
      this.questions[index].choices.push({ title: '' });
    },

    rmchoice(index, cindex) {
      this.questions[index].choices.splice(cindex, 1);
    }
  },
  components: {
    'ui-button': Button,
    'ui-input': Input,
    'ui-select': Select,
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

.question-item {
  margin-bottom: 32px;
  background: var(--color-white);
  box-shadow: 0 0 2px rgba(0,0,0,0.2);
}

.question-item > .heading {
  position: relative;
  padding: 24px;
}

.question-item > .heading > .title {
  margin-bottom: 16px;
}

.question-item > .heading > .typetitle {
  color: var(--color-gray-light);
}

.question-item > .heading > .typeinfo {
  color: var(--color-gray);
}

.question-item > .heading > .count {
  position: absolute;
  top: 0;
  left: -160px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  background: #6fa4cf;
}

.question-item > .heading > .action {
  position: absolute;
  top: 0;
  opacity: 0;
  transition: 100ms all ease;
}

.question-item:hover > .heading > .action {
  opacity: 1;
}

.question-item > .heading > .action.-remove {
  left: -80px;
}

.question-item > .heading > .action.-dir {
  left: calc(100% + 40px);
  width: 120px;
}

.question-item > .body {
  padding: 16px;
  border-top: 1px solid var(--color-gray-light);
}

.question-item > .body > .heading {
  text-transform: uppercase;
  color: var(--color-gray);
}

.heading-input {
  font-size: var(--font-size-h3);
  display: block;
  padding: calc(var(--form-size) / 4);
  width: 100%;
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  outline: 0;
  font-family: var(--font-family);
  resize: none;
}

.heading-input:hover,
.heading-input:focus {
  transition: 200ms border ease;
  border-color: var(--color-gray-light);
}

.choice-item {
  display: flex;
  margin-bottom: 8px;
}

.choice-item > input {
  margin-right: 24px;
}

.choice-placeholder {
  display: inline-block;
  color: var(--color-gray);
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
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