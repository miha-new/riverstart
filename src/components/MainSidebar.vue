<template lang="pug">
.main-sidebar
  router-link.sidebar-logo-link(
    to="/"
  )
    svg.sidebar-logo-svg
      use(xlink:href="images/sprite.svg#logo")
  .sidebar-money
    h4.sidebar-money-title Все деньги
    .sidebar-money-card
      .sidebar-money-content
        .sidebar-money-all
          | 1 930 545
          span.text-muted ,26 ₽
        .sidebar-money-rubles
          | 1 345 511
          span.text-muted ,26 ₽
        .sidebar-money-dollar
          | 8 797
          span.text-muted ,41 $ (569 156,26 ₽)
      .sidebar-money-content
        .sidebar-money-row
          .sidebar-money-col
            span.text-muted Тинькофф банк
          .sidebar-money-col
            | 541 356
            span.text-muted ,47 ₽
        .sidebar-money-row
          .sidebar-money-col
            span.text-muted Тинькофф банк, $
          .sidebar-money-col
            | 8 797
            span.text-muted ,41 ₽
        .sidebar-money-row
          .sidebar-money-col
            span.text-muted Касса
          .sidebar-money-col
            | 671 099
            span.text-muted ,11 ₽
    ul.sidebar-nav
      li.sidebar-nav-item
        router-link.sidebar-nav-link(
          to="/operations"
        )
          svg.sidebar-nav-icon
            use(xlink:href="images/sprite.svg#operations")
          |  Операции
      li.sidebar-nav-item
        router-link.sidebar-nav-link(
          to="/reports"
        )
          svg.sidebar-nav-icon
            use(xlink:href="images/sprite.svg#reports")
          |  Отчеты
      li.sidebar-nav-item
        router-link.sidebar-nav-link(
          to="/counterparties"
        )
          svg.sidebar-nav-icon
            use(xlink:href="images/sprite.svg#counterparties")
          |  Контрагенты
      li.sidebar-nav-item
        router-link.sidebar-nav-link(
          to="/projects"
        )
          svg.sidebar-nav-icon
            use(xlink:href="images/sprite.svg#projects")
          |  Проекты
      li.sidebar-nav-item
        router-link.sidebar-nav-link(
          to="/expenditure"
        )
          svg.sidebar-nav-icon
            use(xlink:href="images/sprite.svg#expenditure")
          |  Статьи расходов
      li.sidebar-nav-item
        router-link.sidebar-nav-link(
          to="/employees"
        )
          svg.sidebar-nav-icon
            use(xlink:href="images/sprite.svg#employees")
          |  Сотрудники
    .sidebar-user
      .sidebar-user-avatar
        img(src="images/avatar.png" alt="")
      .sidebar-user-info
        .sidebar-user-name Андрей Никонов
        .sidebar-user-company Riverstart Digital
      button.sidebar-user-settings
        svg.sidebar-user-icon
          use(xlink:href="images/sprite.svg#settings")
      button.sidebar-user-faq
        svg.sidebar-user-icon
          use(xlink:href="images/sprite.svg#faq")
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.main-sidebar {
  position: relative;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 120px;
  background-color: #f5f5f5;
  border-radius: 30px 0 0 30px;
  overflow: hidden;
  .sidebar-logo-link {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .sidebar-logo-svg {
    width: 30px;
    height: 29px;
    fill: rgba(#2e2e2e,.4);
  }
  .sidebar-money {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .sidebar-money-title {
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
  }
  .sidebar-money-card {
    background-color: #eee;
    border-radius: 15px;
  }
  .sidebar-money-content {
    padding: 10px 15px;
    &:not(:first-child){
      border-top: 1px solid #dcdcdc;
    }
  }
  .sidebar-money-all {
    font-weight: 500;
    font-size: 28px;
    line-height: 36px;
    margin-bottom: .5rem;
  }
  .sidebar-money-rubles,
  .sidebar-money-dollar {
    position: relative;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    padding-left: 20px;
    &::before {
      content: '';
      position: absolute;
      bottom: 50%;
      left: 0;
      width: 1px;
      height: 17px;
      background-color: #dcdcdc;
    }
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 13px;
      height: 1px;
      background-color: #dcdcdc;
    }
  }
  .sidebar-money-row {
    display: flex;
    flex-wrap: wrap;
    margin-top: .25rem;
    margin-bottom: .25rem;
  }
  .sidebar-money-col {
    flex: 0 0 auto;
    font-size: 12px;
    line-height: 16px;
    &:first-child {
      margin-right: auto;
    }
    &:last-child {
      margin-left: auto;
    }
  }
  .sidebar-nav {
    display: block;
    padding: 0;
    margin-top: 20px;
    margin-bottom: 20px;
    list-style: none;
  }
  .sidebar-nav-item {
    display: block;
    margin-bottom: 10px;
  }
  .sidebar-nav-link {
    position: relative;
    display: inline-block;
    color: #2e2e2e;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    padding: 10px 15px 10px 35px;
    border-radius: 15px;
    &:hover {
      text-decoration: none;
      background-color: #eee;
    }
  }
  .sidebar-nav-icon {
    position: absolute;
    top: 50%;
    left: 15px;
    margin-top: -8px;
    width: 16px;
    height: 16px;
    fill: #2e2e2e;
  }
  .sidebar-user {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-wrap: wrap;
    padding: 20px 30px;
    background-color: #eee;
    border-radius: 30px 0 0 30px;
  }
  .sidebar-user-avatar {
    flex: 0 0 40px;
    max-width: 40px;
  }
  .sidebar-user-info {
    flex: 0 0 calc(100% - 40px);
    max-width: calc(100% - 40px);
    padding-left: 15px;
    padding-right: 30px;
  }
  .sidebar-user-name {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .sidebar-user-company {
    font-size: 16px;
    line-height: 20px;
    color: rgba(#2e2e2e,.4);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .sidebar-user-settings {
    position: absolute;
    top: 15px;
    right: 30px;
    display: block;
    border: none;
    background-color: transparent;
    padding: 4px;
  }
  .sidebar-user-faq {
    position: absolute;
    bottom: 15px;
    right: 30px;
    display: block;
    border: none;
    background-color: transparent;
    padding: 4px;
  }
  .sidebar-user-icon {
    display: block;
    width: 16px;
    height: 16px;
    fill: #2e2e2e;
  }
}
</style>
