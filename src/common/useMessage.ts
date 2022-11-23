import { ElMessage } from 'element-plus'

export const useMessage = () => {
  const message = {
    success: ElMessage.success,
    warning: ElMessage.warning,
    error: ElMessage.error,
    info: ElMessage.info,
    closeAll: ElMessage.closeAll
  }

  return {
    $message: message
  }
}