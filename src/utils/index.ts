// 工具函数封装

/**
 * 格式化金额为人民币格式
 * @param currency 金额
 * @returns 格式化后的金额
 */

export const formatCurrency = (currency: string | number) => {
  const a = parseFloat(currency.toString())
  return a.toLocaleString('zh-CN', {
    style: 'currency',
    currency: 'CNY'
  })
}

// 格式化金钱的第二种方式--正则

// 格式化日期
export const formDate = (date?: Date, rule?: string) => {
  // 当前的时间
  let currentDate = new Date()
  if (date) currentDate = date
  if (rule === 'yyyy-MM-dd') currentDate.toLocaleDateString()
  if (rule === 'hh:mm:ss') currentDate.toLocaleTimeString()
  return currentDate.toLocaleString().replaceAll('/', '-')
}
