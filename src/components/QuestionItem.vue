<template>
  <div class="question-item">
    <div class="heading">
      <div class="count">{{ index + 1 }}</div>

      <div class="action -remove">
        <ui-button type="button" @click.native="remove(index)" title="Remove question" size="small">
          ×
        </ui-button>
      </div>

      <div class="title">
        <heading-input type="textarea" :value="question.title" @change="update($event)" placeholder="Enter question title (e.g., what did you like about brand X)..." class="heading-input"></heading-input>
      </div>

      <span class="typetitle">Question Type:</span>
      <span class="typeinfo">{{ question.name }}</span>

      <div class="action -dir">
        <ui-button type="button" @click.native="move('up')" size="small" v-if="index > 0" title="Move question up">
          <icon name="angle-up"></icon>
        </ui-button>

        <ui-button type="button" @click.native="move('down')" size="small" v-if="index < questions.length - 1" title="Move question down">
          <icon name="angle-down"></icon>
        </ui-button>
      </div>
    </div>

    <div class="body" v-if="question.choices">
      <h5 class="heading">Answers</h5>
      <div v-for="(choice, cindex) in question.choices" class="choice-item">
        <ui-input :value="choice.title" @change="upchoice($event, cindex)" placeholder="Enter choice (e.g., Ariel)"></ui-input>
        <ui-button type="button" @click.native="rmchoice(index, cindex)" title="Remove answer" size="small">
          ×
        </ui-button>
      </div>
      
      <button type="button" @click="choice(index)" class="choice-placeholder" v-if="question.choices.length < 6">
        Add a new answer
      </button>
    </div>
  </div>
</template>

<script>
  import Button from './Button';
  import Input from './Input';
  import HeadingInput from './HeadingInput';

  export default {
    name: 'question-item',
    props: ['question', 'index', 'questions'],
    methods: {
      update(value) {
        this.$emit('update', this.index, value);
      },

      remove() {
        this.$emit('remove', this.index);
      },

      move(dir) {
        this.$emit('move', this.index, dir);
      },

      choice() {
        this.$emit('new-choice', this.index)
      },

      upchoice(evt, cindex) {
        this.$emit('update-choice', this.index, cindex, evt.target.value);
      },

      rmchoice(cindex) {
        this.$emit('remove-choice', this.index, cindex);
      },
    },
    components: {
      'ui-button': Button,
      'ui-input': Input,
      HeadingInput
    },
  }
</script>

<style>
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
</style>