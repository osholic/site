<template>
  <form name="contact" method="POST" data-netlify="true">
    <div class="field">
      <label class="label">姓名</label>
      <div class="control">
        <input class="input" type="text" name="name" />
      </div>
    </div>

    <div class="field">
      <label class="label">邮箱</label>
      <div class="control">
        <input class="input" type="email" name="email" />
      </div>
    </div>

    <div class="field">
      <label class="label">类型</label>
      <div class="control">
        <div class="select">
          <select name="type[]">
            <option>开源作者</option>
            <option>设计师</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">消息</label>
      <div class="control">
        <textarea class="textarea" name="message"></textarea>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button type="submit" class="button is-link">提交</button>
      </div>
    </div>
  </form>
</template>
