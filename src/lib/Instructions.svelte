<script lang="ts">
  import CodeBox from './CodeBox.svelte';
  import ExternalLinks from './ExternalLinks.svelte';
  import PageLink from './PageLink.svelte';
  import { instructionsCodes } from '~/data/instructions-data';
</script>

<div class="instructions">
  <PageLink href="getting-started">
    <h2>Getting started</h2>
  </PageLink>
  <article>
    <PageLink href="install">
      <p><b>Install</b></p>
    </PageLink>
    <CodeBox code={instructionsCodes.install} />
  </article>
  <article>
    <PageLink href="create-store">
      <p><b>Create a store</b></p>
    </PageLink>
    <CodeBox code={instructionsCodes.store} />
  </article>
  <article>
    <PageLink href="use-store">
      <p><b>Use store</b></p>
    </PageLink>
    <CodeBox code={instructionsCodes.useStore} />
  </article>

  <hr />

  <PageLink href="recipes">
    <h2>Recipes</h2>
  </PageLink>

  <article>
    <PageLink href="create-and-use-store">
      <p><b>Create and use store</b></p>
    </PageLink>
    <p>create a store which stores a numeric value</p>
    <CodeBox code={instructionsCodes.createAndUseStore} />
  </article>

  <article>
    <PageLink href="subscribe">
      <p><b>Subscribe</b></p>
    </PageLink>
    <p>
      Create dynamic stores using Subscribe/Unsubscribe methods. Subscription is global and will
      work througout the page.
    </p>
    <CodeBox code={instructionsCodes.subscribe} />
  </article>

  <article>
    <PageLink href="multi-value-store">
      <p><b>Multi value store</b></p>
    </PageLink>
    <p>create an user details store packed in object</p>
    <CodeBox code={instructionsCodes.multiValueStore} />
  </article>

  <article>
    <PageLink href="reset-value">
      <p><b>Reset value</b></p>
    </PageLink>
    <p>Reset initial value</p>
    <CodeBox code={instructionsCodes.resetValue} />
  </article>

  <article>
    <PageLink href="session-storage">
      <p><b>sessionStorage</b></p>
    </PageLink>
    <p>Create session storage (sessionStorage)</p>
    <CodeBox code={instructionsCodes.sessionStorage} />
  </article>

  <article>
    <PageLink href="new-local-storage">
      <p><b>New storage</b></p>
    </PageLink>
    <p>Create a new local storage entry</p>
    <CodeBox code={instructionsCodes.newLocalStorage} />
  </article>

  <article>
    <PageLink href="change-default-storagename">
      <p><b>Default storage name</b></p>
    </PageLink>
    <p>Change Default storage name</p>
    <CodeBox code={instructionsCodes.changeDefaultStorageName} />
  </article>

  <article>
    <PageLink href="sublink-hack">
      <p><b>Sub link hack</b></p>
    </PageLink>
    <p>
      If you are using sub links e.g. github pages then there is a possibility of local storage
      conflict. Use the following hack to avoid it.
    </p>
    <CodeBox code={instructionsCodes.sublinkHack} />
  </article>

  <hr />

  <PageLink href="api">
    <h2>API</h2>
  </PageLink>

  <article>
    <PageLink href="useStorage">
      <p><b>useStorage</b></p>
    </PageLink>
    <CodeBox code={instructionsCodes.useStorage} />
  </article>

  <article>
    <PageLink href="createLocalStorage">
      <p><b>createLocalStorage</b></p>
    </PageLink>
    <CodeBox code={instructionsCodes.createLocalStorage} />
  </article>

  <hr />

  <article>
    <PageLink href="externalLinks">
      <h2>External links</h2>
    </PageLink>
    <ExternalLinks />
  </article>
</div>

<style>
  article {
    padding-bottom: 48px;
  }

  p {
    font-size: 1.1rem;
  }

  b {
    font-size: 1.35rem;
  }
</style>
