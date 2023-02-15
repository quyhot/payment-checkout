<template>
  <div class="pt-2">
    <div class="w-[70%] m-auto">
      <table class="table-auto border-collapse border w-[100%]">
        <thead>
        <tr class="">
          <th class="border-2 p-2 w-[5%]">STT</th>
          <th class="border-2 p-2 w-[20%]">Email</th>
          <th class="border-2 p-2 w-[15%]">Phone</th>
          <th class="border-2 p-2 w-[15%]">Name</th>
          <th class="border-2 p-2 w-[10%]">Amount</th>
          <th class="border-2 p-2 w-[20%]">State</th>
          <th class="border-2 p-2 w-[5%]"></th>
        </tr>
        </thead>
        <tbody class="">
        <tr v-for="(invoice, index) in invoices" :key="invoice._id">
          <td class="border-2 p-2 text-center">{{ index + 1 }}</td>
          <td class="border-2 p-2">{{ invoice.orderId.email }}</td>
          <td class="border-2 p-2">{{ invoice.orderId.phone }}</td>
          <td class="border-2 p-2">{{ invoice.orderId.name }}</td>
          <td class="border-2 p-2">{{ invoice.amount }}</td>
          <td class="border-2 p-2" :class="[colorConfig[invoice.state]]">{{ stateConfig[invoice.state] }}</td>
          <td class="border-2 text-center">
            <div v-if="invoice.state === this.stepConfig.WAIT_FOR_PAY">
              <button class="rounded-xl p-2 bg-blue-400" @click="payment(invoice._id)">pay</button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <paginate class="mt-2 cursor-pointer"
                :page-count="pagination.pageTotal"
                :click-handler="clickCallback"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :container-class="'pagination'"
      >
      </paginate>
    </div>
  </div>
</template>

<script>
import Paginate from "vuejs-paginate-next";

export default {
  name: "InvoiceRecord",
  props: ['invoices', 'pagination'],
  components: {
    paginate: Paginate
  },
  data() {
    const stateConfig = {
      1: 'Giao dịch chờ thanh toán',
      2: 'Đang thanh toán',
      3: 'Giao dịch thành công',
      4: 'Giao dịch thất bại'
    }
    const colorConfig = {
      1: 'text-blue-500',
      2: 'text-yellow-500',
      3: 'text-green-500',
      4: 'text-red-500'
    }
    const stepConfig = {
      WAIT_FOR_PAY: 1,
      PENDING: 2,
      SUCCESS: 3,
      CANCEL: 4
    }
    return {
      stateConfig,
      colorConfig,
      stepConfig,
      pageTotal: null
    }
  },
  mounted() {

  },
  methods: {
    payment(id) {
      this.$router.push({
        name: 'payment',
        params: {
          id
        }
      })
    },
    clickCallback: function (pageNum) {
      this.$emit('getInvoice', pageNum)
    }
  }
}
</script>

<style>
/*@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css';*/
.pagination {
  display: flex;
  gap: 10px;
  color: #236aee;
}
.page-item {
  /*background-color: #1655f6;*/
  padding: 5px 12px;
  border-radius: 3px;
  border: #236aee solid 1px;
  /*border-color: #236aee;*/
}

.page-item:hover {
  background-color: #e7e1e1;
}

.active {
  background-color: #236aee;
  color: white;
}

.disabled {
  color: #a1a1a1;
  border-color: #a1a1a1;
}

.active:hover {
  background-color: #236aee;
}

.disabled:hover {
  color: #a1a1a1;
  border-color: #a1a1a1;
  background-color: unset;
}
</style>
