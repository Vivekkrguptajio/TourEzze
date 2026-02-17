FROM node:20-alpine

WORKDIR /app

# Copy backend package.json
COPY backend/package*.json ./

# Install backend dependencies
RUN npm ci --only=production && npm cache clean --force && \
    apk add --no-cache curl

# Copy only backend code
COPY backend ./

# Expose backend API port
EXPOSE 5001

# Health check (correct port)
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:5001/ || exit 1

# Start backend server
CMD ["npm", "start"]
