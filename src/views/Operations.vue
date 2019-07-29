<template lang="pug">
.content-operations
  h1.content-title Операции
  table-operations(
    :items="operations"
  )
</template>

<script>
import TableOperations from '@/components/TableOperations.vue'

export default {
  name: 'operations',
  components: {
    TableOperations
  },
  data: function () {
    return {
      operations: [
        {
          name: 'ИП Емельянов Антон Викторович',
          bank: 'Тинькофф банк',
          project: 'Сайт Volkswagen',
          projectInfo: 'Продвижение',
          comment: 'Оплата за продвижение Яндекс.Директ июнь-июль',
          status: true,
          statusText: 'Оплачено',
          sum: 50239.17
        },
        {
          name: 'Дмитрий Воропаев',
          bank: 'Тинькофф банк',
          project: 'ИМ Bonafide',
          projectInfo: 'Зарплата сотрудникам',
          comment: 'Аванс Июль',
          status: false,
          statusText: 'Оплачено',
          sum: 200000.00
        },
        {
          name: 'ИП Емельянов Антон Викторович',
          bank: 'Тинькофф банк',
          project: 'Сайт Volkswagen',
          projectInfo: 'Продвижение',
          comment: 'Оплата за продвижение Яндекс.Директ июнь-июль',
          status: true,
          statusText: 'Оплачено',
          sum: 50239.17
        },
        {
          name: 'Дмитрий Воропаев',
          bank: 'Тинькофф банк',
          project: 'ИМ Bonafide',
          projectInfo: 'Зарплата сотрудникам',
          comment: 'Аванс Июль',
          status: false,
          statusText: 'Оплачено',
          sum: 200000.00
        },
        {
          name: 'ИП Емельянов Антон Викторович',
          bank: 'Тинькофф банк',
          project: 'Сайт Volkswagen',
          projectInfo: 'Продвижение',
          comment: 'Оплата за продвижение Яндекс.Директ июнь-июль',
          status: true,
          statusText: 'Оплачено',
          sum: 50239.17
        },
        {
          name: 'Дмитрий Воропаев',
          bank: 'Тинькофф банк',
          project: 'ИМ Bonafide',
          projectInfo: 'Зарплата сотрудникам',
          comment: 'Аванс Июль',
          status: false,
          statusText: 'Оплачено',
          sum: 200000.00
        },
        {
          name: 'ИП Емельянов Антон Викторович',
          bank: 'Тинькофф банк',
          project: 'Сайт Volkswagen',
          projectInfo: 'Продвижение',
          comment: 'Оплата за продвижение Яндекс.Директ июнь-июль',
          status: true,
          statusText: 'Оплачено',
          sum: 50239.17
        },
        {
          name: 'Дмитрий Воропаев',
          bank: 'Тинькофф банк',
          project: 'ИМ Bonafide',
          projectInfo: 'Зарплата сотрудникам',
          comment: 'Аванс Июль',
          status: false,
          statusText: 'Оплачено',
          sum: 200000.00
        },
        {
          name: 'ИП Емельянов Антон Викторович',
          bank: 'Тинькофф банк',
          project: 'Сайт Volkswagen',
          projectInfo: 'Продвижение',
          comment: 'Оплата за продвижение Яндекс.Директ июнь-июль',
          status: true,
          statusText: 'Оплачено',
          sum: 50239.17
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.content-operations {

}
</style>
