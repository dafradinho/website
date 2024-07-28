<script setup></script>

<template>
  <header>
    <div class="wrapper">
      <div class="header-content">
        <h1 class="logo"><a href="#">Fradinho</a></h1>
        <nav>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Notes</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Podcast</a></li>
            <li><a href="#">Newsletter</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../styles/globals.scss";

header {
  padding: 20px 0;
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: $black;

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo,
  nav {
    a {
      color: white;
    }
  }

  .logo {
    a {
      font-weight: 900;
      font-size: 24px;
    }
  }

  nav {
    ul {
      display: flex;

      li {
        margin-right: 20px;

        &:last-of-type {
          margin-right: 0;
        }

        a {
          padding-bottom: 2px;
          border-bottom: 2px solid transparent;
          font-weight: 500;
          font-size: 18px;

          &:hover {
            border-color: $white;
          }
        }
      }
    }
  }
}
</style>
