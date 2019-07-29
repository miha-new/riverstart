<template lang="pug">
.table-responsive
  table.table-operations
    tbody.tbody-operations
      tr.tr-operations(
        v-for="item in items"
        :class="item.status ? 'tr-operations--income' : 'tr-operations--costs'"
      )
        td.td-operations.w-50
          .operations-indicator
            svg.operations-icon
              use(xlink:href="images/sprite.svg#arrow")
        td.td-operations
          .text-14 {{ item.name }}
          .text-12
            span.text-muted Cо счета:
            |  {{ item.bank }}
        td.td-operations
          .text-14 {{ item.project }}
          .text-12.text-muted {{ item.projectInfo }}
        td.td-operations.w-250
          .text-14 {{ item.comment }}
        td.td-operations.text-center
          .operations-status {{ item.statusText }}
        td.td-operations
          .operations-sum(
            v-html="htmlSum(item.sum,item.status)"
          )
</template>

<script>
export default {
  props: {
    items: Array
  },
  methods: {
    htmlSum (sum, status) {
      let operator = status ? '+' : '-'
      let integer = this.getIntegerSum(sum)
      let fractional = this.getFractionalSum(sum)
      return `${operator}${integer}<span class="text-muted">,${fractional} ₽</span>`
    },
    getIntegerSum (sum) {
      let integer = String(sum).split('.')[0]
      return integer.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
    },
    getFractionalSum (sum) {
      return String(sum).split('.')[1] || '00'
    }
  }
}
</script>

<style scoped lang="less">
.table-operations {
  width: 100%;
  min-width: 915px;
  border-bottom: 1px solid #eaeaea;
}
.tr-operations {
  &:nth-child(even) {
    background-color: #f7f7f7;
  }
  &--income {
    .operations-indicator {
      background-color: #18aa00;
    }
    .operations-icon {
      fill: #fff;
      transform: translate(-50%,-50%) rotate(180deg);
    }
    .operations-sum {
      color: #18aa00;
    }
  }
  &--costs {
    .operations-indicator {
      background-color: #ff7f57;
    }
    .operations-icon {
      fill: #da3300;
    }
    .operations-sum {
      color: #da3300;
    }
  }
}
.td-operations {
  padding: 15px 10px;
  border-top: 1px solid #eaeaea;
  font-size: 14px;
}
.operations-indicator {
  position: relative;
  width: 30px;
  height: 30px;
  background-color: #eee;
  border-radius: 8px;
}
.operations-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 12px;
  fill: #2e2e2e;
  transform: translate(-50%,-50%);
}
.operations-status {
  display: inline-block;
  padding: 5px 10px;
  background-color: #eee;
  border-radius: 10px;
  font-size: 14px;
  line-height: 20px
}
.operations-sum {
  white-space: nowrap;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
}
.w-50 {
  width: 50px;
}
.w-250 {
  width: 250px;
}
.w-120 {
  width: 120px;
}
.w-140 {
  width: 140px;
}
.text-12 {
  font-size: 12px;
}
</style>
