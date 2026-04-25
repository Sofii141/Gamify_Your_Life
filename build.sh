#!/bin/bash
set -e

echo "Installing dependencies..."
pip install --upgrade pip
pip install --only-binary :all: -r Backend/requirements.txt

echo "Build completed successfully!"
