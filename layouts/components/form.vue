<template>
  <form action="/thank-you" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <div class="field">
      <label class="label">姓名</label>
      <div class="control">
        <input required class="input" type="text" name="name" />
      </div>
    </div>

    <div class="field">
      <label class="label">邮箱</label>
      <div class="control">
        <input required class="input" type="email" name="email" />
      </div>
    </div>

    <div class="field">
      <label class="label">项目链接</label>
      <div class="control">
        <input required class="input" type="url" name="repo" />
      </div>
    </div>

    <div class="field">
      <label class="label">备注</label>
      <div class="control">
        <textarea required class="textarea" name="message"></textarea>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button type="submit" class="button is-primary">提交</button>
      </div>
    </div>
  </form>
</template>
